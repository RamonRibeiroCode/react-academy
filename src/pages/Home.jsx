import React from "react";

import { LiLink } from "../components/LiLink";

const Home = () => {
  return (
    <ul>
      <LiLink text="Link 01" href="/home" />
      <LiLink text="Link 02" href="/contato" />
      <LiLink text="Link 03" href="/contato" />
      <LiLink text="Link 04" href="/contato" />
      <LiLink text="Link 05" href="/contato" />
    </ul>
  );
};

export { Home };
