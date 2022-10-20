import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x438FbD4630f35105A68BfD06df31Bf0540Ef0F46");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "My First DAO",
        description: "This NFT will give you access to DonationsDAO!",
        image: readFileSync("scripts/assets/nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})(); 