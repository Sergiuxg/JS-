interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({
  current,
  total,
}: ProgressBarProps) => {

  const percentage = Math.round((current / total) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Întrebarea {current} din {total}
          </h2>

          <p className="text-slate-500 mt-1">
            Progresul simulării
          </p>

        </div>

        <div className="text-right">

          <p className="text-3xl font-bold text-indigo-600">
            {percentage}%
          </p>

          <p className="text-sm text-slate-500">
            Finalizat
          </p>

        </div>

      </div>

      <div className="mt-6 w-full h-4 bg-slate-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-indigo-600 rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
};

export default ProgressBar;