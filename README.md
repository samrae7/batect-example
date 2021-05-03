# Reproducing an issue running batect from a node child process

To reproduce issue:
(assuming you have nodejs runtime installed on your machine and have the `node` command on your path)

- clone this repo
- cd into project directory
- run `./batect hello-world`. You should see "Hello World" printed to the console.
- run `node index.js`. You should see the following error

```During execution of step of kind 'RunContainerStep': batect.os.UnixNativeMethodException: Invoking native method ioctl failed with error EOPNOTSUPP (Operation not supported on socket)```