#!/bin/sh

dbus-daemon --session --fork
Xvfb :1 -screen 0 "${SCREEN_WIDTH}x${SCREEN_HEIGHT}x24" >/dev/null 2>&1 &
export DISPLAY=:1.0
fluxbox >/dev/null 2>&1 &

testcafe ${BROWSERS} --ports 1337,1338 --skip-js-errors --speed ${SPEED} -s path=/screenshots,takeOnFails=true -r spec,slack "/tests/*.test.js" "$@"
RESULT=$?

# Upload screenshots somewhere ?
if [ -n $SCREENSHOTS_RCLONE_PATH ]; then
    cd /tmp
    tar cf screenshots.tar /screenshots
    rclone copy screenshots.tar s3:$SCREENSHOTS_RCLONE_PATH
fi

exit $RESULT
