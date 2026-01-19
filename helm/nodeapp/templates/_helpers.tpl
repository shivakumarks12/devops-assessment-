{{/*
Common labels
*/}}

{{- define "nodeapp.name" -}}
nodeapp
{{- end }}

{{- define "nodeapp.fullname" -}}
{{ .Release.Name }}-nodeapp
{{- end }}

{{- define "nodeapp.serviceAccountName" -}}
{{ .Values.serviceAccount.name }}
{{- end }}
