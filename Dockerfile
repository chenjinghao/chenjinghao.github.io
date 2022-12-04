FROM python:3.9-slim
COPY . /devops_cicd_project_adamcjh
WORKDIR /devops_cicd_project_adamcjh
RUN pip install --target=/devops_cicd_project_adamcjh twilio
RUN chmod +x /devops_cicd_project_adamcjh/run.py
CMD ["python3.9", "/devops_cicd_project_adamcjh/run.py"]
