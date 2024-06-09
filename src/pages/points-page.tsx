export function PointsBalancePage() {
  return (
    <div>
      <h2 className="font-semibold mb-5">Your points balance</h2>

      <div className="flex flex-col gap-2 divide-y">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span>Mojo Wynyard</span>
            <span className="text-sm text-gray-500">24/03/2024</span>
          </div>
          <span>+34 points</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span>Mojo Wynyard</span>
            <span className="text-sm text-gray-500">24/02/2024</span>
          </div>
          <span>+12 points</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span>Mojo Wynyard</span>
            <span className="text-sm text-gray-500">28/01/2024</span>
          </div>
          <span>+96 points</span>
        </div>
      </div>
    </div>
  );
}
