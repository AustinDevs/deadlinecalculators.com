module Jekyll
  module CustomTagFilter
    def image(path)
      "/assets/images/#{path[18..-4]}.webp"
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomTagFilter)