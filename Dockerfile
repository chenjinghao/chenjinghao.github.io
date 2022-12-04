FROM python:3.11-slim
COPY . /devops_cicd_project_adamcjh
WORKDIR /devops_cicd_project_adamcjh
RUN pip install --target=/devops_cicd_project_adamcjh twilio
CMD ["python", "/devops_cicd_project_adamcjh/run.py"]