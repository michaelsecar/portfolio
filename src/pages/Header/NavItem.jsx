export const NavItem = ({
  text,
  href,
  Icon = undefined,
  isCurrent = false,
}) => {
  return (
    <a
      href={href}
      className={`
                text-md p-4 gap-2 border-b-2 border-transparent duration-100 w-20 lg:w-40 h-12
                flex items-center justify-center 
                dark:text-gray-200 
                ${
                  isCurrent
                    ? "dark:text-green-400 dark:border-b-green-400 text-green-600 border-b-green-600"
                    : "text-gray-700 hover:text-gray-400 hover:border-b-gray-400"
                }`}
    >
      {Icon ? <Icon /> : <></>}
      <span className="hidden lg:block">{text}</span>
    </a>
  );
};
