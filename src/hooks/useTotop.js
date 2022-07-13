export default function useTotop(top = 0) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return handleScrollToTop;
}
