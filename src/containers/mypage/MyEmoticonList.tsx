import { useState } from "react";

const MyEmoticonList = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <div>
          MyEmoticonList
        </div>
      )}
    </>
  );
};

export default MyEmoticonList;