## Workflow

* `middleman` to start development server
* `middleman article TITLE` to generate a new article
* `rake build` to test build
* `rake publish` to publish (builds and pushes to gh-pages branch on origin
#### Articles

Articles are written in markdown and also processed with `<%= ERB %>`. Add `published: false` to the YAML bit in the beginning of the article to make it a draft. 

#### Images

    <%= image_tag 'image_name.png' %>
    <img src="/images/image_name.png">

    <%= article_image_tag 'image_name.png' %>
    <img src="/images/2016-01-01-my-article-slug/image_name.png">

#### Icons

    <%= glyphicon('play') %>
    <i class='glyphicon glyphicon-play'></i>

#### Summary / read more:

If the article contains `READMORE`, the part above `READMORE` will be considered a summary, and will be rendered on the index page with a "Read more" link after it.

#### Syntax Highlighting:

Use `code language do` helper like this:

    <% code 'c' do %>
    if (~1) {
      void 0;
    }
    <% end %>

* `rake syntax:theme[theme_name]` -- to set the theme (defaults to thankful_eyes)
* `rake syntax:themes` -- to get the list of themes

Syntax highlighting is provided by [rouge][rouge]

[rouge]: https://github.com/jayferd/rouge
