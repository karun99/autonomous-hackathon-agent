# syntax=docker/dockerfile:1
# Ship the Hack2Find SPA shell as a static image.
#
# The Electron shell in `desktop/` is for the desktop build (electron-builder).
# This image serves the same `frontend/` SPA over HTTP for browser use and for
# smoke-testing the packaged assets in CI.

FROM nginx:1.27-alpine AS runtime
COPY frontend/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
CMD ["nginx", "-g", "daemon off;"]
