# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :homework,
  ecto_repos: [Homework.Repo]

config :plaid,
  root_uri: "https://development.plaid.com/",
  client_id: 623b6db2b5b1140012aedc86,
  secret: 2499f919d0b485a7db2e64b098aad9,
  public_key: "your_public_key",
  httpoison_options: [timeout: 10_000, recv_timeout: 30_000]

# Configures the endpoint
config :homework, HomeworkWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "+IjyxgEncWjAVS+ARMn8qUGkijbmXyEp7YTevKL+sfe0dcpJmaaeNXFW8j/By5i9",
  render_errors: [view: HomeworkWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Homework.PubSub,
  live_view: [signing_salt: "4Ka1Trkx"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
