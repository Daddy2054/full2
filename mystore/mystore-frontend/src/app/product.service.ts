import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /** GET products from the server */
  getProducts(): Observable<Product[]> {
  //  console.log(this.productsUrl)
    return this.http.get<Product[]>(this.productsUrl).pipe(
      //      tap((_) => console.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  /** GET product by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      //      tap((_) => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) {}
  private productsUrl = environment.envVar.API_URL+"/api/products"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /* GET products whose name contains search term */
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty product array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
      /*  tap((x) =>
        x.length
          ? console.log(`found products matching "${term}"`)
          : console.log(`no products matching "${term}"`)
      ), */
      catchError(this.handleError<Product[]>('searchProducts', []))
    );
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      // tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  /** POST: add a new product to the server */
  addProduct(newProduct: Product): Observable<Product> {
    return this.http
      .post<Product>(this.productsUrl, newProduct, this.httpOptions)
      .pipe(
        //       tap((newProduct: Product) => console.log(`added product w/ id=${newProduct.id}`)),
        catchError(this.handleError<Product>('addProduct'))
      );
  }
  /** DELETE: delete the product from the server */
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  /*create initial products list */
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        quantity: 1,
        name: 'Book',
        price: 9.99,
        url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'You can read it!',
        category: '',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Headphones',
        price: 249.99,
        url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Listen to stuff!',
        category: '',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Backpack',
        price: 79.99,
        url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Carry things around town!',
        category: '',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Glasses',
        price: 129.99,
        url: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Now you can see!',
        category: '',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Cup',
        price: 4.99,
        url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Drink anything with it!',
        category: '',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Shirt',
        price: 29.99,
        url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
        description: 'Wear it with style!',
        category: '',
      },
    ];

    for (let index = 0; index < products.length; index++) {
      const element: Product = products[index];
      this.addProduct(element).subscribe();
    }
  }
}
