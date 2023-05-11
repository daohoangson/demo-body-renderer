# HTML body renderer demo

Some web services (e.g. Twitter) will not render properly if their embedded code is used as a data URI within a web view.
This api will receive the HTML and render a proper web page to help with that. It supports both GET and POST request to accommodate large input.

No validation is being done so it is intentionally open to cross-site scripting attacks and friends.

Originally from [daohoangson/flutter_widget_from_html@8a61402](https://github.com/daohoangson/flutter_widget_from_html/commit/8a614027cdb43d9bd8398bedd669077c5c26c727).

#### GET request

```bash
curl https://demo-body-renderer.vercel.app\?body=hello
```

Output:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body>hello</body>
</html>
```

#### POST request

```bash
curl https://demo-body-renderer.vercel.app -d body=lorem+lipsum
```

Output

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body>lorem lipsum</body>
</html>
```
