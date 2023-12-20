import { useScrolledDown } from '@/hooks/useScrolledDown';
import { fireEvent, renderHook } from '@/test-utils';

window.document.body.getBoundingClientRect = jest.fn(() =>
  window.document.body.getBoundingClientRect(),
);

describe('useScrolledDown', () => {
  it('should say if user scrolled', () => {
    const { result } = renderHook(useScrolledDown);
    expect(result.current).toEqual(false);

    (
      window.document.body.getBoundingClientRect as jest.Mock
    ).mockImplementationOnce(() => ({
      top: -100,
    }));
    fireEvent.scroll(window.document);

    expect(result.current).toEqual(true);
  });
});
