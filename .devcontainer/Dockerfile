# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.140.1/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="12-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN sudo -u node /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

ENV PATH=/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:$PATH

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && sudo ./aws/install \
    && rm awscliv2.zip

RUN brew install awscli

RUN brew tap weaveworks/tap

RUN brew install weaveworks/tap/eksctl

RUN brew install kubectl

RUN brew install helm

# RUN sudo apt-get update && sudo apt-get install -y apt-transport-https gnupg2 \
#     && curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add - \
#     && echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list \
#     && sudo apt-get update \
#     && sudo apt-get install -y kubectl

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN sudo -u node npm install -g <your-package-list-here>
