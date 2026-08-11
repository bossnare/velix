export const Main = () => {
  return (
    <>
      <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto">
        <div className="h-20 rounded bg-foreground"></div>
        <div className="h-20 rounded bg-foreground"></div>
      </div>
      <div className="grid max-w-6xl grid-cols-4 gap-4 pt-4 mx-auto">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-40 bg-muted animate-pulse rounded"></div>
        ))}
      </div>
    </>
  );
};
