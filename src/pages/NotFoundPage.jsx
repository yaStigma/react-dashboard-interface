export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-textPrimary text-center">
      <h2 className="text-4xl font-bold mb-4">Page Under Construction</h2>
      <p className="text-lg text-textSecondary mb-8">
        This page is currently under development. Please check back later!
      </p>
      <div className="text-8xl">🚧</div>
    </div>
  );
}
