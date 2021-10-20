import React, { useState } from "react";
import { Button, Htag, P, Rating, Search, Tag } from "../component";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next";
import Error from "next/error";
function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">
        Text for informatin on the clock are you gone to make more rules for
        developer
      </P>
      <Tag size="s">Small</Tag>

      <Tag size="m" color="red">
        Medium Red
      </Tag>
      <Tag size="m" color="grey">
        Medium Grey
      </Tag>
      <Tag size="m" color="green">
        Medium Green
      </Tag>
      <Tag size="m" color="primary">
        Medium Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Search />
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
