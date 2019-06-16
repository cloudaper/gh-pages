Gem::Specification.new do |s|
  s.name        = 'cloudaper-gh-pages'
  s.version     = '0.1.0'
  s.summary     = 'Core of all Cloudaper presentation sites'
  s.author      = ['Cloudaper', 'Kryštof Korb']
  s.email       = ['hello@cloudaper.com', 'krystof@korb.cz']
  s.license     = 'UNLICENSED'
  s.homepage    = 'https://github.com/cloudaper/gh-pages'

  s.metadata['plugin_type'] = 'theme'

  s.files       = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end
  
  s.add_runtime_dependency 'github-pages'
  s.add_runtime_dependency 'jekyll-sitemap'
  s.add_runtime_dependency 'jekyll-optional-front-matter'

  s.add_development_dependency 'bundler'
end
