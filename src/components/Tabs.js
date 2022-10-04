
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Comments from "./Comments";
import DealTerms from "./DealTerms";
import Details from "./Details";

import Pitch from "./Pitch";
import Updates from "./Updates";

export default function DataTabs() {
  const data = [
    {
      label: "Pitch",
      value: "pitch",
      desc: Pitch(),
    },
    {
      label: "Details",
      value: "details",
      desc: Details(),
    },

    {
      label: "Updates",
      value: "updates",
      desc: Updates(),
    },

    {
      label: "Comments",
      value: "comments",
      desc: Comments(),
    },

    {
      label: "Deal Terms",
      value: "deal_terms",
      desc: DealTerms(),
    },
  ];

  return (
    <div className="container mx-auto ">
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}