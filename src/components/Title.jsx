export const Title = ({ title, description }) => {
  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold dark:text-green-400 text-green-600 py-4">
        {title}
      </h2>
      <p className="">{description}</p>
    </div>
  );
};
