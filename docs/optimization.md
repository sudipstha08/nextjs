## OPTIMIZATION

- Avoid css @import
   
- Include `height` or `width` in images
   ```html
    <img src="image.png" height="30" width="50" />
   ```
- Minify `css` and `js`
 
- `Page titles` - search engines like Google use your <title> tag to understand what your page is about and serve that content to its users. Make sure your <title> tag is less than 160 characters, unique to the page, and click worthy.
  ```html
  <title>Unique page title</title>
  ```

- Minimizing poor user experience  
  Google’s latest algorithm updates reveal that user engagement metrics like dwell time--how long someone stays on your website from the Google search engine results page--are being used for rankings. If users are staying longer on your site compared to your competitors, you will see higher rankings.

- Using the right keywords 
  the core of SEO still depends on the usage of relevant keywords.

- Meta Tags
  A meta tag basically tells the search engines what the content of that specific page is, what exactly that page is about, and how the search engine should show it.
  In Next.js, such attributes should be specified in ./pages/_document.tsx 
```JSX
<Head>
  <title>Example</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
  <meta name="description" content="Description of your website" />                            <meta name="author" content="Author's name" />                                 
  <meta name="keywords" content="List, of, keywords" />                                 
  <meta name="application-name" content="Application name" />
</Head>
```
  A nice thing about the Head built-in component is that when you are adding a new meta tag, and you want to make sure that this meta tag will not be duplicated, you can use the key property and it will be rendered only once:

  Social meta tags provide you with a great way to enrich links to your website posted on social media websites or forwarded in private messages.
  ```JSX
  <meta property="og:url" content={currentUrl} />                             
  <meta property="og:title" content={pageTitle} />                             
  <meta name="twitter:title" content={pageTitle} />
  ```
  Some of them should be assigned on a page-to-page basis (like above ones), while some should be assigned globally
  ```JSX
  /* Facebook's Open Graph */
  <meta property="og:type" content="website" />                                 
  <meta property="og:site_name" content={title} />                                 
  <meta property="og:description" content={description} />                                 
  <meta property="og:image" content={image} />                                 
  <meta property="og:image:alt" content={imageAlt} />                                 
  <meta property="og:locale" content="en_CA" />
  /* Twitter */
  <meta name="twitter:card" content="summary_large_image" />                                  <meta name="twitter:description" content={description} />                                  <meta name="twitter:image" content={image} />                                 
  <meta  name="twitter:image:alt" content={imageAlt} />
  ```

- You can use Next.js to measure some metrics such as `FCP` or `LCP` (Largest Contentful Paint). All you have to do is create a custom App component and define a function called reportWebVitals:
```JSX
 //pages/_app.js
  export function reportWebVitals(metric) {
    console.log(metric)
  }
```
The `reportWebVitals` function will be triggered when the final values of any of the metrics have finished on the page

- In August 2014, Google declared HTTPS as a ranking signal. The Hypertext Transfer Protocol Secure (HTTPS) gives your users an extra layer of protection when they share information with you.
## There are two main categories of SEO

- On-page SEO 
  often referred to as making your site or application search engine friendly. Next.js can help you with this type of SEO.
- Off-page SEO 
  includes creating backlinks to your site or creating a social media presence which Next.js can not help you with.

- Enable Crawlers
  it is important to make sure that search engines’ crawlers are able to access your website. One of the most widely used ways to do so is with the robots.txt. Through this file, owners of a website can specify which crawlers are permitted to look for and index which pages.
  This file should sit in the root directory of your website. In Next.js, the ./public folder It is important to note that although most crawlers will follow the instruction given in this file, it does not prevent them from crawling the pages if they would want to. If you wish to keep certain pages private, you should consider password-protecting them.

- Create Sitemap
  A sitemap is a file that essentially contains a list of all of the pages on your website. Google provides a comprehensive overview of it in their guide. In order to generate a sitemap for our Next.js website, we need to consider what types of routes we have (static, dynamic). We also need to decide how often do we want to update it or which events should trigger the update. Once generated in .xml format, we need to compress it and store it in the root directory of the website (./public folder for Next.js app

## --------
- When your site uses server-side rendering, you can return all of the information to the browser in its entirety. This is important because the search engine crawls the page at that moment. If information is not there and your client is still trying to process JS, as well as get data from APIs, the information will be loaded on to the page after the crawl takes place. Even one second of client-side rendering can cost you on-page SEO value.

<img src="">