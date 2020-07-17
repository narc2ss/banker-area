import React from "react";

import IdeaCard from "../components/IdeaCard";
import { IdeaCardPositioner } from "../style/molecules";
import logo from "../static/img/logo.png";
import { useSelector } from "react-redux";

const IdCardContainer = ({ edit, ideaCards }) => {
  console.dir(ideaCards);
  return (
    <>
      <IdeaCardPositioner>
        {ideaCards.map((value) => (
          <IdeaCard
            key={value.idea_seq}
            id={value.idea_seq}
            banker={value.banker_id}
            title={value.project_name}
            article={value.short_description}
            price={value.totalPriceOfIdea}
            view={value.read_count}
            liker={value.likey_count}
            edit={edit}
          />
        ))}
      </IdeaCardPositioner>
    </>
  );
};

export default IdCardContainer;
