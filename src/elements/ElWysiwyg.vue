<template>
  <div class="content" v-html="content"></div>
</template>

<script>
export default {
  name: "ElWysiwyg",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
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
    padding-bottom: $space-s;
    @media #{$media-query-m} {
      padding-bottom: $space-m;
    }
    b {
      padding-bottom: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  b {
    font-size: $size-sm;
    display: block;
    font-weight: $weight-medium;
    color: $color-main;
    font-family: $font-bold;
    padding-bottom: $space-s;
    line-height: $line-height-sm;
    @media #{$media-query-m} {
      padding-bottom: $space-m;
    }
  }

  strong {
    font-size: $size-sm;
    display: block;
    font-weight: $weight-medium;
    color: $color-main;
    line-height: $line-height-sm;
    font-family: $font-bold;
  }

  a {
    text-decoration: none;
    color: inherit;
    line-height: $line-height-sm;

    &:hover,
    &:focus,
    &:active {
      color: $color-main;
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
    font-family: $font-regular;
  }

  h2 {
    font-size: $size-xl;
    line-height: $line-height-l;
    padding-bottom: $space-s;
    @media #{$media-query-m} {
      font-size: $size-xxl;
      line-height: $line-height-xl;
      padding-bottom: $space-m;
    }
  }

  h3 {
    font-size: $size-ml;
    line-height: $line-height-s;
    padding-bottom: $space-s;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media #{$media-query-m} {
      font-size: $size-l;
      line-height: $line-height-sm;
      padding-bottom: $space-m;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  h4 {
    font-size: $size-l;
    line-height: $line-height-ml;
    padding-bottom: $space-s;
    @media #{$media-query-m} {
      font-size: $size-xl;
      line-height: $line-height-l;
    }
  }

  h5 {
    font-size: $size-ml;
    line-height: $line-height-sm;
    padding-bottom: $space-s;
    @media #{$media-query-m} {
      font-size: $size-l;
      line-height: $line-height-l;
    }
  }

  ol,
  ul {
    list-style: none;
    margin-left: $space-s / 2;
    padding-bottom: $space-m;
    @media #{$media-query-m} {
      padding-bottom: $space-l;
    }
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
      word-break: break-word;

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
    font-size: $size-ml;
    line-height: $line-height-m;
    padding-bottom: $space-m;
    position: relative;
    color: $color-gray-darkest;
    @media #{$media-query-m} {
      padding-bottom: $space-l;
      font-size: $size-l;
      line-height: $line-height-ml;
    }

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
