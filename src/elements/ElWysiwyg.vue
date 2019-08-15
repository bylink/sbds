<template>
  <div class="content"><slot /></div>
</template>

<script>
export default {
  name: "ElWysiwyg",
}
</script>

<style lang="scss">
$spaces: $token-spaces;

.content {
  font-family: $font-regular;
  color: $color-gray-darken;

  p {
    font-size: $size-sm;
    line-height: $line-height-sm;
    padding-bottom: $space-m;

    b {
      font-weight: $weight-medium;
      color: $color-gray-darkest;
      font-family: $font-medium;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid $color-main;

    &:hover,
    &:focus,
    &:active {
      border: none;
    }
  }

  img {
    margin-bottom: $space-l;
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $color-gray-darkest;
    font-family: $font-medium;
    padding-top: $space-xxs;
  }

  h3 {
    font-size: $size-xxl;
    line-height: $line-height-xl;
    padding-bottom: $space-m;
  }

  h4 {
    font-size: $size-xl;
    line-height: $line-height-l;
    padding-bottom: $space-s;
  }

  h5 {
    font-size: $size-ml;
    line-height: $line-height-sm;
    padding-bottom: $space-s;
    text-transform: uppercase;
  }

  ol,
  ul {
    list-style: none;
    margin-left: $space-s / 2;
    padding-bottom: $space-l;
  }

  ol {
    counter-reset: a;

    li {
      padding-left: $space-s + 4;
      position: relative;
      font-size: $size-sm;
      line-height: $line-height-sm;

      &:before {
        counter-increment: a;
        content: counter(a) ".";
        position: absolute;
        left: 0;
        top: 0;
        font-size: 18px;
      }
    }
  }

  ul {
    & li {
      padding-left: $space-s + 4;
      position: relative;
      font-size: $size-sm;
      line-height: $line-height-sm;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 9px;
        width: 8px;
        height: 8px;
        border: 2px solid $color-main;
        background: none;
      }
    }
  }

  blockquote {
    quotes: none;
    padding-left: $space-l;
    font-size: $size-l;
    line-height: $line-height-ml;
    padding-top: $space-xxs;
    padding-bottom: $space-l;
    position: relative;
    color: $color-gray-darkest;

    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 12px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMUgxMlY4SDVWMVoiIGZpbGw9IiNGRjcyMDAiLz4KPHBhdGggZD0iTTEyIDhIMTlWMTVIMTJWOFoiIGZpbGw9IiNGRjcyMDAiLz4KPHBhdGggZD0iTTUgMTVIMTJWMjJINVYxNVoiIGZpbGw9IiNGRjcyMDAiLz4KPC9zdmc+Cg==)
        no-repeat;
      width: 25px;
      height: 25px;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
  </div>
  ```
</docs>
