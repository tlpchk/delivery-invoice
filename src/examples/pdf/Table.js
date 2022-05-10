import React from "react";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
  },
});

const Table = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      // ...
      <ItemsTable data={data} />
      // ...
    </Page>
  </Document>
);

export default Table;