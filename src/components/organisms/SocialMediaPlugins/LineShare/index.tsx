import { LineShareButton } from "react-share";
import { ReactNode } from "react";
interface LineProps {
  children?: ReactNode;
  url?: string;
  title?: string;
  disabled?: boolean;
}

const LineShare = ({ children, url, title, disabled }: LineProps) => {
  return (
    <LineShareButton title={title} url={url || ""} disabled={disabled}>
      {children}
    </LineShareButton>
  );
};

export { LineShare };

// https://dev.to/pmca/how-to-build-a-mobile-web-share-component-with-react-in-under-10-minutes-37jh
