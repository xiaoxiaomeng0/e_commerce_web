import { useState } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map(({ id, ...otherCollectionItems }) => (
        <CollectionPreview key={id} {...otherCollectionItems} />
      ))}
    </div>
  );
}

export default ShopPage;
