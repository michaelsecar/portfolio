const ExperienceEntryLine = ({ line }) => {
  return (
    <div className="flex gap-2 items-center border-r-2 border-green-200 p-2 bg-green-300/10">
      <div className="text-xs text-gray-300 inline"> {line}</div>
    </div>
  );
};

export const ExperienceEntry = ({ experienceEntry }) => {
  return (
    <div className="flex flex-col px-4 border-green-300 border-l-4">
      <div className="flex justify-between text-sm items-center">
        <div className="text-md">{experienceEntry.role}</div>
        <div className="">{experienceEntry.enterprise}</div>
      </div>
      <div className="text-sm text-gray-400">{experienceEntry.time}</div>
      <div className="flex flex-col gap-2 pt-4">
        {experienceEntry.entries.map((entry, index) => (
          <ExperienceEntryLine key={index} line={entry} />
        ))}
      </div>
    </div>
  );
};
