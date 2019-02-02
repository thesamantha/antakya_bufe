# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( antakyahome_mobile.css )
Rails.application.config.assets.precompile += %w( antakyahome_tablet.css )
Rails.application.config.assets.precompile += %w( antakyahome_full_screen.css )
Rails.application.config.assets.precompile += %w( antakya_order_full_screen.css )
Rails.application.config.assets.precompile += %w( antakya_order_mobile.css )
Rails.application.config.assets.precompile += %w( antakya_order_tablet.css )
Rails.application.config.assets.precompile += %w( regisztracio.css )
Rails.application.config.assets.precompile += %w( bejelentkezo-ablak.js )
Rails.application.config.assets.precompile += %w( imgViewer.js )
