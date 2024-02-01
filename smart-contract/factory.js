import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xF3a22df503B2a5E99781639129556B02f98a58a9"
);

export default instance;
