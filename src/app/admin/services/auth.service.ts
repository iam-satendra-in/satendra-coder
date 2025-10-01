import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private mockUsers: User[] = [
    {
      id: '1',
      name: 'John Admin',
      email: 'admin@example.com',
      avatar:
        'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      role: 'admin',
      createdAt: new Date('2024-01-01'),
      lastLogin: new Date(),
      isActive: true,
      permissions: [
        'create',
        'read',
        'update',
        'delete',
        'manage_users',
        'manage_payments',
      ],
    },
    {
      id: '2',
      name: 'Jane User',
      email: 'user@example.com',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      role: 'user',
      createdAt: new Date('2024-01-15'),
      lastLogin: new Date(),
      isActive: true,
      permissions: ['read', 'attempt_quiz', 'view_tutorials'],
    },
    {
      id: '3',
      name: 'Guest User',
      email: 'guest@example.com',
      avatar:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      role: 'guest',
      createdAt: new Date('2024-02-01'),
      lastLogin: new Date(),
      isActive: true,
      permissions: ['read'],
    },
  ];

  constructor() {
    // Set default admin user
    this.currentUserSubject.next(this.mockUsers[0]);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  switchUser(userId: string): void {
    const user = this.mockUsers.find((u) => u.id === userId);
    if (user) {
      this.currentUserSubject.next(user);
    }
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user?.permissions?.includes(permission) || false;
  }

  isAdmin(): boolean {
    return this.getCurrentUser()?.role === 'admin';
  }

  isUser(): boolean {
    return this.getCurrentUser()?.role === 'user';
  }

  isGuest(): boolean {
    return this.getCurrentUser()?.role === 'guest';
  }

  canManageContent(): boolean {
    return (
      this.hasPermission('create') &&
      this.hasPermission('update') &&
      this.hasPermission('delete')
    );
  }

  canViewAdminPanel(): boolean {
    return this.isAdmin();
  }

  getAllUsers(): User[] {
    return this.mockUsers;
  }

  updateUser(userId: string, updates: Partial<User>): void {
    const userIndex = this.mockUsers.findIndex((u) => u.id === userId);
    if (userIndex !== -1) {
      this.mockUsers[userIndex] = { ...this.mockUsers[userIndex], ...updates };
      if (this.getCurrentUser()?.id === userId) {
        this.currentUserSubject.next(this.mockUsers[userIndex]);
      }
    }
  }

  deleteUser(userId: string): void {
    this.mockUsers = this.mockUsers.filter((u) => u.id !== userId);
  }

  createUser(user: Omit<User, 'id' | 'createdAt'>): void {
    const newUser: User = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    this.mockUsers.push(newUser);
  }
}
