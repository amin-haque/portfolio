# Install pnpm globally
npm install -g pnpm

# Run Hugo commands
hugo
hugo mod vendor

# Navigate to the HugoBlox module directory
Set-Location -Path './_vendor/github.com/HugoBlox/hugo-blox-builder/modules/blox-tailwind/'

# Install dependencies with pnpm
pnpm install

# Set the HB_TW_CONTENT environment variable
$env:HB_TW_CONTENT = '../../../../../../hugo_stats.json'

# Run tailwindcss with npx
npx tailwindcss -i ./assets/css/styles.css --config ./tailwind.config.js -o ../../../../../../assets/dist/wc.min.css --minify --postcss

# Return to the root directory
Set-Location -Path '../../../../../../'

# Remove the _vendor directory
Remove-Item -Recurse -Force ./_vendor

# Start Hugo server
hugo server --disableFastRender
