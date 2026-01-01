# Notes

**This will be used as a compendium of things I encountered during the development process, which could pop back up in the future.**

### Setup

**Issue**
2026/01/01 14:15:59 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 7168 kiB, got: 416 kiB). See https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes for details.

- Doesn't prevent starting the server
- Limited size of bandwidth
- OS config related, need to increase the size anytime a server is setup
- Follow: https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes
