export  function copyToClipboard(slug : string) {
  navigator.clipboard.writeText(slug)
}