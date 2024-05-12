---
title: Easily Achieve Number Formatting and Currency Display with JavaScript Native Intl.NumberFormat
customSlug: javascript-intl-numberformat-for-number-formatting-and-currency-display
tags:
  - JavaScript
  - Internationalization
  - Number Formatting
  - Front-end Development
snippet: Number formatting and currency display are common requirements in front-end development. In the past, developers often relied on third-party libraries or wrote their own code to handle currency formatting. Now, JavaScript provides the native Intl.NumberFormat object, making number formatting and currency display more convenient. This article introduces how to use Intl.NumberFormat, including setting the locales and options parameters, and how to obtain the formatted result using the format method.
publishDate: 2024-05-08 21:47
category: Development
---

In front-end development, number formatting and currency display are very common requirements. Previously, we usually needed to rely on third-party libraries or write our own code to format currency. Now, JavaScript provides the native `Intl.NumberFormat` object, making number formatting and currency display more convenient.

`Intl.NumberFormat` is part of the ECMAScript Internationalization API. It provides number formatting functionality that can convert numbers into formats that conform to local regional conventions based on the specified language environment and options.

Here are some parameters for using `Intl.NumberFormat`:

1. `locales`: Specifies the language environment, which can be a string or an array of strings. For example, `'zh-TW'` represents Traditional Chinese (Taiwan), and `'ja-JP'` represents Japanese (Japan).
2. `options`: An options object used to customize number formatting. Commonly used options include:
    - `style`: Specifies the formatting style, which can be `'decimal'` (default value, plain number), `'currency'` (currency), or `'unit'` (unit).
    - `currency`: Specifies the currency code, such as `'TWD'` for New Taiwan Dollar or `'JPY'` for Japanese Yen.
    - `unit`: Specifies the unit, such as `'gram'`, `'kilogram'`, `'kilometer-per-hour'`, etc.
    - `minimumFractionDigits`: Specifies the minimum number of fraction digits. For example, when set to `0`, the decimal part will not be displayed.

When we create an instance of `Intl.NumberFormat`, we can pass in the `locales` and `options` parameters to configure the behavior of number formatting. Then, by calling the `format` method and passing in the number to be formatted, we can obtain the formatted string result.

```javascript 
//example 01
console.log(
  new Intl.NumberFormat('ja-JP', { 
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0
  }).format(123457))
// NT$123,457

// example 02
console.log(
  new Intl. NumberFormat('pt-PT', {
      style: 'unit',
      unit: 'kilometer-per-hour'
  }).format(50))
// 50 km/h
```