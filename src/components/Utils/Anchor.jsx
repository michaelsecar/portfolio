export const Anchor = ({ text, href, Icon = undefined, ...props }) => {
  return (
    <a
      className="
                sm:my-0 my-1 justify-center
                flex p-3 text-md items-center gap-2 border-2
                dark:text-green-400 dark:border-green-400 dark:hover:text-black dark:hover:bg-green-400 
                text-green-600 border-green-600 hover:text-white hover:bg-green-600 
                rounded-md duration-100 hover:drop-shadow-[0_0_10px_rgba(0,230,0,0.3)]"
      href={href}
      {...props}
    >
      <Icon /> {text}
    </a>
  );
};
