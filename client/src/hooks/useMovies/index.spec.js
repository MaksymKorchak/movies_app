import { renderHook, act } from "@testing-library/react-hooks";
import { useMovies } from ".";
import { MAX_SELECTED_MOVIES } from "../../constants";

describe("useMovies hook", () => {
  const basicMovie = {
    id: 1,
    title: "Title",
  };

  it ("should select movie", () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    expect(result.current.selectedMovies.length).toBe(1);
  });

  it ("should delete movie", () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    expect(result.current.selectedMovies.length).toBe(1);

    act(() => {
      result.current.deleteMovie(basicMovie);
    });
    expect(result.current.selectedMovies.length).toBe(0);
  });

  it ("should select movie only once", () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    expect(result.current.selectedMovies.length).toBe(1);
  });

  it ("should add no more movies that wass allowed", () => {
    const { result } = renderHook(() => useMovies());

    for(let i=0; i < MAX_SELECTED_MOVIES; i++){
        act(() => {
            result.current.selectMovie({
                ...basicMovie,
                id: i
            })
        })
    };
    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);

    act(() => {
        result.current.selectMovie({
            ...basicMovie,
            id: 100
        });
      });
    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);
  })
});
