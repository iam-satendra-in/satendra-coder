import { loadStripe } from './../../../../node_modules/@stripe/stripe-js/dist/pure.d';
import { Stripe } from './../../../../node_modules/@stripe/stripe-js/dist/stripe-js/stripe.d';
import { Injectable } from '@angular/core';
import {
  StripeCardElement,
  StripeElements,
} from '@stripe/stripe-js/dist/stripe-js';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  clientSecret: string;
}

export interface PaymentMethod {
  id: string;
  type: string;
  card?: {
    brand: string;
    last4: string;
    expMonth: number;
    expYear: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private stripe: Stripe | null = null;
  private elements: StripeElements | null = null;
  private cardElement: StripeCardElement | null = null;

  private paymentMethods = new BehaviorSubject<PaymentMethod[]>([]);
  private transactions = new BehaviorSubject<any[]>([
    {
      id: 'txn_1234567890',
      amount: 29.99,
      currency: 'USD',
      status: 'succeeded',
      description: 'Angular Advanced Course',
      created: new Date('2024-01-15'),
      customer: 'John Doe',
    },
    {
      id: 'txn_0987654321',
      amount: 19.99,
      currency: 'USD',
      status: 'succeeded',
      description: 'React Tutorial Bundle',
      created: new Date('2024-01-14'),
      customer: 'Jane Smith',
    },
    {
      id: 'txn_1122334455',
      amount: 49.99,
      currency: 'USD',
      status: 'pending',
      description: 'Full Stack Development Course',
      created: new Date('2024-01-13'),
      customer: 'Mike Johnson',
    },
  ]);

  constructor() {
    this.initializeStripe();
  }

  private async initializeStripe() {
    this.stripe = await loadStripe(environment.stripePublishableKey);
  }

  async createElements() {
    if (!this.stripe) {
      await this.initializeStripe();
    }

    if (this.stripe) {
      this.elements = this.stripe.elements();
      return this.elements;
    }
    return null;
  }

  async createCardElement(elements: StripeElements) {
    this.cardElement = elements.create('card', {
      style: {
        base: {
          fontSize: '16px',
          color: '#374151',
          '::placeholder': {
            color: '#9ca3af',
          },
        },
        invalid: {
          color: '#dc2626',
        },
      },
    });
    return this.cardElement;
  }

  async createPaymentIntent(
    amount: number,
    currency: string = 'usd'
  ): Promise<PaymentIntent> {
    // In a real application, this would make an API call to your backend
    // which would create the payment intent with Stripe
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 'pi_' + Math.random().toString(36).substr(2, 9),
          amount: amount * 100, // Stripe uses cents
          currency,
          status: 'requires_payment_method',
          clientSecret:
            'pi_' +
            Math.random().toString(36).substr(2, 9) +
            '_secret_' +
            Math.random().toString(36).substr(2, 9),
        });
      }, 1000);
    });
  }

  async confirmPayment(
    clientSecret: string,
    cardElement: StripeCardElement
  ): Promise<any> {
    if (!this.stripe) {
      throw new Error('Stripe not initialized');
    }

    return this.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });
  }

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return this.paymentMethods.asObservable();
  }

  getTransactions(): Observable<any[]> {
    return this.transactions.asObservable();
  }

  addPaymentMethod(paymentMethod: PaymentMethod) {
    const current = this.paymentMethods.value;
    this.paymentMethods.next([...current, paymentMethod]);
  }

  removePaymentMethod(id: string) {
    const current = this.paymentMethods.value;
    this.paymentMethods.next(current.filter((pm) => pm.id !== id));
  }
}
