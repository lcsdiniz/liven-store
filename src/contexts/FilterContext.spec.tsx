import { renderHook, act, RenderHookResult } from '@testing-library/react-native';
import { FilterContextType, FilterProvider } from './FilterContext';
import { useFilter } from '../hooks/useFilter';

describe('FilterContext', () => {
  let hook: RenderHookResult<FilterContextType, unknown>

  beforeEach(async () => {
    hook = renderHook(() => useFilter(), { wrapper: FilterProvider })
  })

  it('should add category to filter', () => {
    act(() => { hook.result.current.addFilter('category1') });
    act(() => { hook.result.current.addFilter('category2') });
    act(() => { hook.result.current.addFilter('category3') });

    expect(hook.result.current.filters).toHaveLength(3);
  });

  it('should remove category of filter after trying to add it again', async () => {
    act(() => { hook.result.current.addFilter('category1') });
    act(() => { hook.result.current.addFilter('category1') });

    expect(hook.result.current.filters).toHaveLength(0);
  });
});
