import { HoverGradient } from './hover-gradient';

describe('HoverGradient', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as any;
    const mockRenderer2 = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle', 'addClass', 'removeClass', 'setAttribute', 'removeAttribute', 'listen', 'selectRootElement', 'createElement', 'createComment', 'createText', 'appendChild', 'insertBefore', 'removeChild', 'parentNode', 'nextSibling', 'setProperty']);
    const directive = new HoverGradient(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
