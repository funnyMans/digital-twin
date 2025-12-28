export type AnimatedCardItem = {
  id: string;
  title: string;
  description: string;
  meta?: string;
};
type AnimatedCardProps = {
  item: AnimatedCardItem;
};

function AnimatedCard({ item }: AnimatedCardProps) {
  return (
    <div className="flex w-full max-w-88 items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-medium text-white">
        {item.title.charAt(0)}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{item.title}</span>
          {item.meta && (
            <span className="text-xs text-muted-foreground">{item.meta}</span>
          )}
        </div>

        <span className="text-sm text-muted-foreground">
          {item.description}
        </span>
      </div>
    </div>
  );
}
export { AnimatedCard };
