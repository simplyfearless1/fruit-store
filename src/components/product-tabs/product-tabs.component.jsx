import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ProductTabPanel from "../product-tab-panel/product-tab-panel.component";
import ProductList from "../product-list/product-list.component";
import { useRecoilValue } from "recoil";
import { productsLoadedState } from "../../state/loaded-products.state";

export default function ProductTabs() {
  const [value, setValue] = useState(0);
  const products = useRecoilValue(productsLoadedState);
  const countries = Array.from(
    new Set([...products.map((product) => product.country)]),
  );

  function filterProductsOnCountryAndTabs(products, country, tab) {
    if (tab && country) {
      return products.filter(
        (product) => product.country === country && product.tab === tab,
      );
    } else if (country) {
      return products.filter((product) => product.country === country);
    } else return products;
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Hot" {...a11yProps(0)} />
          <Tab label="New" {...a11yProps(1)} />
          <Tab label="Recommended" {...a11yProps(2)} />
          <Tab label="All" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <ProductTabPanel value={value} index={0}>
        <ProductList
          country="America"
          products={filterProductsOnCountryAndTabs(products, "America", "Hot")}
        />
        <ProductList
          country="England"
          products={filterProductsOnCountryAndTabs(products, "England", "Hot")}
        />
        <ProductList
          country="Japan"
          products={filterProductsOnCountryAndTabs(products, "Japan", "Hot")}
        />
      </ProductTabPanel>
      <ProductTabPanel value={value} index={1}>
        <ProductList
          country="America"
          products={filterProductsOnCountryAndTabs(products, "America", "New")}
        />
        <ProductList
          country="England"
          products={filterProductsOnCountryAndTabs(products, "England", "New")}
        />
        <ProductList
          country="Japan"
          products={filterProductsOnCountryAndTabs(products, "Japan", "New")}
        />
      </ProductTabPanel>
      <ProductTabPanel value={value} index={2}>
        <ProductList
          country="America"
          products={filterProductsOnCountryAndTabs(
            products,
            "America",
            "Recommended",
          )}
        />
        <ProductList
          country="England"
          products={filterProductsOnCountryAndTabs(
            products,
            "England",
            "Recommended",
          )}
        />
        <ProductList
          country="Japan"
          products={filterProductsOnCountryAndTabs(
            products,
            "Japan",
            "Recommended",
          )}
        />
      </ProductTabPanel>
      <ProductTabPanel value={value} index={3}>
        <ProductList
          country="America"
          products={filterProductsOnCountryAndTabs(products, "America")}
        />
        <ProductList
          country="England"
          products={filterProductsOnCountryAndTabs(products, "England")}
        />
        <ProductList
          country="Japan"
          products={filterProductsOnCountryAndTabs(products, "Japan")}
        />
      </ProductTabPanel>
    </Box>
  );
}
