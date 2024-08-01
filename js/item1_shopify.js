/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: '14b160-2.myshopify.com',
        storefrontAccessToken: '886b1efdf5ef9e9cb1ba2ae195142eda',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '8646557303077',
          node: document.getElementById('product-component-1722296110155'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Abril Fatface",
          "font-weight": "normal"
        },
        "button": {
          "font-family": "Abril Fatface",
          "font-size": "16px",
          "padding-top": "12px",
          "padding-bottom": "12px",
          ":hover": {
            "background-color": "#75339e"
          },
          "background-color": "#451e5d",
          ":focus": {
            "background-color": "#75339e"
          },
          "border-radius": "30px",
          "padding-left": "78px",
          "padding-right": "78px"
        },
        "quantityInput": {
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px"
        },
        "price": {
          "font-family": "Playfair Display, serif"
        },
        "compareAt": {
          "font-family": "Playfair Display, serif"
        },
        "unitPrice": {
          "font-family": "Playfair Display, serif"
        }
      },
      "contents": {
        "img": false,
        "title": false,
        "price": false
      },
      "text": {
        "button": "Add - $8"
      },
      "googleFonts": [
        "Playfair Display",
        "Abril Fatface"
      ]
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-family": "Playfair Display, serif",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
            "background-color": "#75339e"
          },
          "background-color": "#451e5d",
          ":focus": {
            "background-color": "#75339e"
          },
          "border-radius": "30px",
          "padding-left": "78px",
          "padding-right": "78px"
        },
        "quantityInput": {
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px"
        },
        "title": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "bold",
          "font-size": "26px",
          "color": "#4c4c4c"
        },
        "price": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "18px",
          "color": "#4c4c4c"
        },
        "compareAt": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        },
        "unitPrice": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        }
      },
      "googleFonts": [
        "Playfair Display"
      ],
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-family": "Playfair Display, serif",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
            "background-color": "#75339e"
          },
          "background-color": "#451e5d",
          ":focus": {
            "background-color": "#75339e"
          },
          "border-radius": "30px"
        },
        "title": {
          "color": "#451e5d"
        },
        "header": {
          "color": "#451e5d"
        },
        "lineItems": {
          "color": "#451e5d"
        },
        "subtotalText": {
          "color": "#451e5d"
        },
        "subtotal": {
          "color": "#451e5d"
        },
        "notice": {
          "color": "#451e5d"
        },
        "currency": {
          "color": "#451e5d"
        },
        "close": {
          "color": "#451e5d",
          ":hover": {
            "color": "#451e5d"
          }
        },
        "empty": {
          "color": "#451e5d"
        },
        "noteDescription": {
          "color": "#451e5d"
        },
        "discountText": {
          "color": "#451e5d"
        },
        "discountIcon": {
          "fill": "#451e5d"
        },
        "discountAmount": {
          "color": "#451e5d"
        },
        "cart": {
          "background-color": "#d3afe9"
        },
        "footer": {
          "background-color": "#d3afe9"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      },
      "popup": false,
      "googleFonts": [
        "Playfair Display"
      ]
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-family": "Playfair Display, serif",
          "background-color": "#451e5d",
          ":hover": {
            "background-color": "#75339e"
          },
          ":focus": {
            "background-color": "#75339e"
          }
        },
        "count": {
          "font-size": "16px"
        }
      },
      "googleFonts": [
        "Playfair Display"
      ]
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#451e5d"
        },
        "title": {
          "color": "#451e5d"
        },
        "price": {
          "color": "#451e5d"
        },
        "fullPrice": {
          "color": "#451e5d"
        },
        "discount": {
          "color": "#451e5d"
        },
        "discountIcon": {
          "fill": "#451e5d"
        },
        "quantity": {
          "color": "#451e5d"
        },
        "quantityIncrement": {
          "color": "#451e5d",
          "border-color": "#451e5d"
        },
        "quantityDecrement": {
          "color": "#451e5d",
          "border-color": "#451e5d"
        },
        "quantityInput": {
          "color": "#451e5d",
          "border-color": "#451e5d"
        }
      }
    }
  },
        });
      });
    }
  })();
/*]]>*/