# Dockerfile for building EPOcoin binaries.

Now, you can build your own EPOcoin files on all systems with docker and do it easy without installing depends on your system.

## How:

### Build docker image

```
sudo docker build .
```

### Run docker container

Builder will return HASH of image
Example:
Successfully built 9bbff825d50f

```
sudo docker run -it -v ~/path/to/EPOcoin/folder:/EPOcoin 9bbff825d50f
```

If your system uses SELINUX you may use --privileged=true key

```
sudo docker run --privileged=true -it -v ~/development/EPOcoin:/EPOcoin 9bbff825d50f
```

See EPOcoin-qt file in used EPOcoin folder and EPOcoind file in src subfolder.