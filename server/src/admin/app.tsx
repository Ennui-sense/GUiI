import type { StrapiApp } from '@strapi/strapi/admin';
import MenuLogo from "./extensions/logo.svg";

export default {
  config: {
    auth: {
      logo: MenuLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    locales: [
      'ru',
    ],
    // https://github.com/strapi/strapi/blob/main/packages/core/admin/admin/src/translations/ru.json
    // https://github.com/strapi/strapi/blob/main/packages/core/upload/admin/src/translations/ru.json
    translations: {
      ru: {
        // авторизация
        "global.home": "Главная",
        "HomePage.header.title": "Привет, {name}!",
        "HomePage.header.subtitle": "Добро пожаловать в панель администратора",
        // главная
        "widget.key-statistics.title": "Статистика проекта",
        "widget.key-statistics.list.admins": "Администраторов",
        "widget.key-statistics.list.apiTokens": "API токенов",
        "widget.key-statistics.list.assets": "Файлов",
        "widget.key-statistics.list.components": "Компонентов",
        "widget.key-statistics.list.contentTypes": "Типов контента",
        "widget.key-statistics.list.entries": "Записей",
        "widget.key-statistics.list.locales": "Языков",
        "widget.key-statistics.list.webhooks": "Вебхуков",
        "widget.last-activity.link": "Открыть журнал действий",
        "widget.last-activity.no-activity": "Действий нет",
        "widget.last-activity.title": "Последние действия",
        "widget.profile.title": "Профиль",
        "content-manager.widget.chart-entries.title": "Запись",
        "content-manager.widget.chart-entries.count.label": "{count, plural, =0 {Записей} one {Запись} other {Записи}}",
        "content-manager.widget.chart-entries.tooltip": "{count} {label}",
        "content-manager.widget.last-edited.title": "Последние измененные записи",
        "content-manager.widget.last-edited.single-type": "Одиночный тип",
        "content-manager.widget.last-edited.no-data": "Нет измененных записей",
        "content-manager.widget.last-published.title": "Последние опубликованные записи",
        "content-manager.widget.last-published.no-data": "Нет опубликованных записей",
        "HomePage.addWidget.title": "Добавить виджет",
        "HomePage.addWidget.noWidgetsAvailable": "Нет доступных виджетов",
        "HomePage.addWidget.button": "Добавить виджет",
        "HomePage.widget.delete": "Удалить",
        "HomePage.widget.drag": "Потяните, чтобы переместить",
        // авторизация
        "app.components.HomePage.welcome.again": "Привет!",
        "Auth.form.welcome.subtitle": "Войдите в свой аккаунт",
        "Auth.form.welcome.title": "Привет!",
        // медиа
        "app.components.InputFile.newFile": "Добавить новый файл",
        "app.components.ImgPreview.hint": "Добавьте свои файлы сюда",
        "upload.header.actions.add-assets": "Добавить файлы",
        // контент-менеджер
        "content-manager.containers.edit.panels.default.title": "Запись",
        "content-manager.actions.clone.error": "Произошла ошибка при дублировании документа",
        "content-manager.actions.clone.label": "Дублировать",
        "content-manager.actions.delete.dialog.body": "Вы уверены, что хотите удалить этот документ? Его не получится восстановить.",
        "content-manager.actions.delete.error": "Произошла ошибка при удалении документа",
        "content-manager.actions.delete.label": "Удалить запись{isLocalized, select, true { (all locales)} other {}}",
        "content-manager.actions.discard.label": "Отменить изменения",
        "content-manager.actions.discard.dialog.body": "Вы уверены, что хотите отменить изменения? Их не получится восстановить.",
        "content-manager.actions.edit.error": "Произошла ошибка при редактировании документа",
        "content-manager.actions.edit.label": "Редактировать",
        "content-manager.actions.unpublish.error": "Произошла ошибка при отмене публикации документа.",
        "content-manager.actions.unpublish.dialog.body": "Вы уверены, что хотите отменить публикацию документа?",
        "content-manager.actions.unpublish.dialog.option.keep-draft": "Отменить публикацию и сохранить последний черновик",
        "content-manager.actions.unpublish.dialog.option.replace-draft": "Отменить публикацию и заменить последний черновик",
        "content-manager.containers.edit.tabs.draft": "черновик",
        "content-manager.containers.edit.tabs.published": "опубликовано",
        "content-manager.components.Select.draft-info-title": "Черновик",
        "content-manager.components.Select.publish-info-title": "Опубликовано",
        "content-manager.containers.List.draft": "Черновик",
        "content-manager.containers.List.published": "Опубликовано",
        "content-manager.containers.List.modified": "Изменено",
        "content-manager.preview.panel.title": "Обложка",
        "content-manager.preview.panel.button": "Открыть обложку",
        "content-manager.preview.panel.button-configuration": "Установить обложку",
        "content-manager.preview.panel.button-disabled-tooltip": "Пожалуйста сохраните обложку, чтобы открыть",
        "content-manager.preview.page-title": "{contentType} обложка",
        "content-manager.preview.header.close": "Закрыть обложку",
        "content-manager.preview.copy.label": "Скопироваать ссылку на обложку",
        "content-manager.preview.copy.success": "Ссылка на обложку скопирована",
        "content-manager.preview.tabs.label": "Статус обложки"
      }
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
