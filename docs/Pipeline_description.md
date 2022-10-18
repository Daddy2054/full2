# Pipeline Process

![](pipeline.png)

Config file _.circleci/config.yml_ explain how pipeline in working.

After initial setup and installing packages, building/compiling step is executed, for two parts.

In the case of successful outcome, the pipeline is put on hold until manual approval.

Then, deploying step is executed. 

## How to replicate

follow the steps from README