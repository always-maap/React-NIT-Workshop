export default function Container(props) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto">
      {props.children}
    </div>
  );
}
