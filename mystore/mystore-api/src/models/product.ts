import client from "../data/database";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  url: string;
  quantity: number;
};

/*
export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};
*/
export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const sql =
        " \
      SELECT \
        * \
      FROM \
        Products \
      ";
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get products list. Error: ${err}`);
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const sql =
        "\
        SELECT \
          * \
        FROM \
          products \
        WHERE \
          id = ($1) \
        ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get product ${id}. Error: ${err}`);
    }
  }

  // select * from products by category;
  async productsByCategory(category: string): Promise<Product[]> {
    try {
      const sql =
        "\
      SELECT \
        * \
      FROM \
        products \
      WHERE \
        category = ($1) \
      ";
      const conn = await client.connect();
      const result = await conn.query(sql, [category]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Unable get products by category: ${err}`);
    }
  }

  async create(product: Product): Promise<Product> {
  //  console.log("models/product.ts create ctarted");
  //  console.log(product);
    try {
      let values: Array<string | number>;
      const sql =
        "\
      SELECT \
        * \
      FROM \
        products \
      WHERE \
        name = ($1) \
      AND \
        price = ($2) \
      ";
      values = [product.name, product.price];
//      console.log(sql, values);
      const conn = await client.connect();
      let result = await conn.query(sql, values);
  //    console.log(result.rows.length);
      if (!result.rows[0]) {
        const sql =
          "\
        INSERT INTO \
          products (name, price, category,url,description,quantity) \
        VALUES ($1, $2, $3,$4,$5,$6) \
        RETURNING * \
        ";
        values = [
          product.name,
          product.price,
          product.category,
          product.url,
          product.description,
          product.quantity,
        ];
        result = await conn.query(sql, values);
    //    console.log(sql, values, result);
      }
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not add product ${product.name}. Error: ${err}`);
    }
  }

  async delete(id: number): Promise<Product> {
    try {
      const sql =
        "\
      DELETE FROM \
        products \
      WHERE id = ($1) \
        RETURNING * \
      ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete product ${id}. Error: ${err}`);
    }
  }
}
